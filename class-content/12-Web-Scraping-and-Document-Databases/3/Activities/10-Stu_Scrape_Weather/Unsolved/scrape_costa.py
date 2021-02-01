import requests
from bs4 import BeautifulSoup as bs
import time

def scrape_info():

    # Visit visitcostarica.herokuapp.com
    url = "https://visitcostarica.herokuapp.com/"
    response = requests.get(url)

    # Scrape page into Soup
    html = response.text
    soup = bs(html, "html.parser")

    # Get the average temps
    # @TODO: YOUR CODE HERE!
    avg_temps = soup.find('div', id='weather')

    # Get the min avg temp
    # @TODO: YOUR CODE HERE!
    mini_temp = avg_temps.find_all('strong')[0].text
    
    # Get the max avg temp
    # @TODO: YOUR CODE HERE!
    max_temp = avg_temps.find_all('strong')[1].text
    
    # BONUS: Find the src for the sloth image
    # @TODO: YOUR CODE HERE!

    
    # Store data in a dictionary
    costa_data = {
        "sloth_img": sloth_img,
        "min_temp": min_temp,
        "max_temp": max_temp
    }

    # Return results
    return costa_data
