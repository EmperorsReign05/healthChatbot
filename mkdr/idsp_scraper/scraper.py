import os
import requests
from bs4 import BeautifulSoup
import pdfplumber

BASE_URL = "https://idsp.nic.in"
OUTBREAK_URL = "https://idsp.nic.in/index4.php?lang=1&level=0&linkid=406&lid=3689"

def get_outbreak_pdfs():
    response = requests.get(OUTBREAK_URL)
    response.raise_for_status()
    soup = BeautifulSoup(response.text, "html.parser")
    pdf_links = []
    for link in soup.find_all("a", href=True):
        href = link["href"]
        if href.lower().endswith(".pdf"):
            pdf_links.append(BASE_URL + "/" + href.lstrip("/"))
    return pdf_links

def download_pdf(url, folder="outbreak_reports"):
    os.makedirs(folder, exist_ok=True)
    filename = os.path.join(folder, url.split("/")[-1])
    response = requests.get(url)
    response.raise_for_status()
    with open(filename, "wb") as f:
        f.write(response.content)
    return filename

def extract_text_from_pdf(filepath):
    text = ""
    with pdfplumber.open(filepath) as pdf:
        for page in pdf.pages:
            text += page.extract_text() + "\n"
    return text

if __name__ == "__main__":
    print("Fetching outbreak PDFs from IDSP...")
    pdf_links = get_outbreak_pdfs()
    print(f"Found {len(pdf_links)} PDFs.")
    for url in pdf_links[:3]:  # sample: first 3 PDFs
        print(f"Downloading: {url}")
        filepath = download_pdf(url)
        content = extract_text_from_pdf(filepath)
        print("\n--- Extracted Content Preview ---\n")
        print(content[:500])
