const express = require('express')
const app = express()
var webdriver = require('selenium-webdriver')
var driver = new webdriver.Builder().forBrowser('chrome').build()

driver.get('https://tokopedia.com')
// driver.findElement(webdriver.By.className("btn new-btn-search")).click()

app.get('/login', function(){
  driver.get('http://tokopedia.com')
  driver.findElement(webdriver.By.id("login-ddl-link")).click()
  driver.findElement(webdriver.By.id("inputEmail")).sendKeys('atandiawan@gmail.com')
  driver.findElement(webdriver.By.id("inputPassword")).sendKeys('abcd')
  driver.findElement(webdriver.By.id("login-ddl-link")).click()
})

app.get('/belipulsa', function(){
  driver.get('https://www.tokopedia.com/pulsa/?ispulsa=1')
  driver.findElement(webdriver.By.id("client_number")).clear()
  driver.findElement(webdriver.By.id("client_number")).sendKeys("08999871008")
  driver.findElement(webdriver.By.xpath("(//span[@class='provider__nominal__price'])[1]")).click()
  driver.findElement(webdriver.By.className("iCheck-helper")).click()
  driver.findElement(webdriver.By.id("submit")).click()
})

app.listen(3000, function(){
  console.log('listening on 3000')
})
