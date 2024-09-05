import os
import xml.etree.ElementTree as ET

# Hardcoded Credentials
USERNAME = "admin"
PASSWORD = "12345"

def authenticate(user, password):
    if user == USERNAME and password == PASSWORD:
        return True
    else:
        return False

def execute_command(command):
    # Vulnerável a OS Command Injection
    os.system(command)

def parse_xml(xml_data):
    try:
        # Vulnerável a XXE (XML External Entity)
        tree = ET.ElementTree(ET.fromstring(xml_data))
        root = tree.getroot()
        print(f"Root tag: {root.tag}")
    except Exception as e:
        # Exceção genérica
        print("Ocorreu um erro ao processar o XML:", e)

def main():
    user = input("Username: ")
    password = input("Password: ")

    if authenticate(user, password):
        print("Authenticated successfully!")
        
        command = input("Enter command to execute: ")
        execute_command(command)

        xml_data = input("Enter XML data: ")
        parse_xml(xml_data)
    else:
        print("Invalid credentials!")

if __name__ == "__main__":
    main()
