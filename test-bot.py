from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By
import time

driver = webdriver.Chrome()
driver.get("file:///D:/Data/Dev/Html/Pop-up%20-%20Copy/index.html") # get local file

time.sleep(5) # let the page load for 5 seconds, then run code below

amount_input = "//input[@id='sell-amount']"
sell = "//*[@class='button']"

driver.find_element(By.XPATH, (amount_input)).send_keys("5792") # automatically fill input field with pre defined value in field with id sell-amount
driver.find_element(By.XPATH, (sell)).click() # automatically click on button with class button

time.sleep(15) # let the page load for 15 seconds

driver.close()




