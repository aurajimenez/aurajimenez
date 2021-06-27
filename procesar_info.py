#!/bin/bash
import os
import os.path
import json
databuena = []
databuena2 = []
databuena3 = []
databuena4 = []

def transformar_json_education():
    with open("about-front/src/data/education.json") as file:
        raw_data = file.read()
    data = json.loads(raw_data)

    for un in data:
        item = un['fields']
        type_of_education = item['type_of_education']
        date = item['date']
        name_of_education = item['name_of_education']
        institution = item['institution']
        link = item['link']
        description = item['description']
        otradata = {"type_of_education" : type_of_education, "date" : date, "name_of_education" : name_of_education, 
        "institution":institution, "link" : link, "description": description}
        databuena.append(otradata)
        with open("about-front/src/data/education.json", "w") as f:
            json.dump(databuena, f)
    return databuena

def transformar_json_experiencia():
    with open("about-front/src/data/experience.json") as file:
        raw_data = file.read()
    data = json.loads(raw_data)

    for un in data:
        item = un['fields']
        role = item['role']
        description = item['description']
        company = item['company']
        date = item['date']
        otradata = {"role" : role, "description" : description, "company":company, "date": date}
        databuena2.append(otradata)
        with open("about-front/src/data/experience.json", "w") as f:
            json.dump(databuena2, f)
    return databuena2

def transformar_json_hobbies():
    with open("about-front/src/data/hobbies.json") as file:
        raw_data = file.read()
    data = json.loads(raw_data)

    for un in data:
        item = un['fields']
        description = item['description']
        name = item['name']
        images = item['images']
        types = item['types']
        otradata = {"description" : description, "name" : name, "images":images, "types": types}
        databuena3.append(otradata)
        with open("about-front/src/data/hobbies.json", "w") as f:
            json.dump(databuena3, f)
    return databuena3

def transformar_json_projects():
    with open("about-front/src/data/project.json") as file:
        raw_data = file.read()
    data = json.loads(raw_data)

    for un in data:
        item = un['fields']
        date = item['date']
        techonologies = item['techonologies']
        description = item['description']
        name = item['name']
        company = item['company']
        link = item['link']
        otradata = {"date" : date, "techonologies" : techonologies, "description":description, "name": name
        , "company": company, "link": link}
        databuena4.append(otradata)
        with open("about-front/src/data/project.json", "w") as f:
            json.dump(databuena4, f)
    return databuena4

def procesar():
    if os.path.exists("about-front/src/data/experience.json"):
        os.remove("about-front/src/data/experience.json")
    if os.path.exists("about-front/src/data/project.json"):
        os.remove("about-front/src/data/project.json")
    if os.path.exists("about-front/src/data/education.json"):
        os.remove("about-front/src/data/education.json")
    if os.path.exists("about-front/src/data/hobbies.json"):
        os.remove("about-front/src/data/hobbies.json")
        
    os.system("python manage.py dumpdata experience > about-front/src/data/experience.json")
    os.system("python manage.py dumpdata project > about-front/src/data/project.json")
    os.system("python manage.py dumpdata education > about-front/src/data/education.json")
    os.system("python manage.py dumpdata hobbies > about-front/src/data/hobbies.json")
    
    transformar_json_education()
    transformar_json_experiencia()
    transformar_json_hobbies()
    transformar_json_projects()

procesar()