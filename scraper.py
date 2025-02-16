from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import json

def scrape():
    driver = webdriver.Chrome()
    driver.get('https://reports.unc.edu/class-search/?')

    def fill_dropdown(inputId, option):
        input_element = driver.find_element(By.ID, inputId)
        input_element.send_keys(option) 

    fill_dropdown('term', '2025 Spring' )
    fill_dropdown('subject', 'COMP' )
    search_button = driver.find_element(By.ID, 'filter-submit')
    search_button.click()
    time.sleep(2)

    catalog = []
    name = []


    rows = driver.find_elements(By.XPATH, "//table//tr")

    for row in rows:
        cells = row.find_elements(By.TAG_NAME, 'td')
        # print(len(cells))
        
        if len(cells) == 14:  
            catalog.append(cells[1].text)
            name.append(cells[5].text)
        if len(cells) == 13:  
            catalog.append(cells[0].text)
            name.append(cells[4].text)


    # for i in range(0,len(catalog)):
    #     print(catalog[i])
    #     print(name[i])

    driver.quit()
    return (catalog, name)


courses = scrape()

with open("courses.json", "w") as file:
    json.dump(courses, file)

print("Courses saved to courses.json")
# run program scraper.py if courses.json is not present