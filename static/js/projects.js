const projects = document.getElementById("projects")
const list = document.getElementById("list")

let outerId = ["ford-bike", "movie-data","cancer","money","pharm"]
let href = ["ford-go-page","movie-data-page","cancer-page","money-page","pharm-page"]
let header = ["ford-bike analysis", "movie-data analysis","cancer prediction","exchange rate scraper","pharmacy mgt system"]
let paragraphs = [`The Ford bike dataset contains
details for a bike sharing company.
 I carried out detailed analysis on the dataset in order to understand
  the trend in usage of the go bike services in relation to
  factors such as customers age and the time of the year.
  The dataset can be gotten from kaggle right here
  <a id="spec" href="https://www.kaggle.com/datasets/chirag02/ford-gobike-2019feb-tripdata">201902-fordgobike-tripdata.csv</a>
  <br>
  <br>
  <b>Observations</b>
  <br>
  <br>
  The increase of duration with distance is clear across age_groups is clearly visible. 
  And also the trend where the least distances covered per duration are the age groups <20 and >60 is repeated in the graph.
  <br>
  <br>
  <img src="images/barcharts.png" alt="chart">
  <br>
  <br>
  Average duration of the subcribers is lower than those of customers across all ages even though there are more subscibers than customers.
  <br>
  <br>
  <img src="images/fordline.png" alt="chart">
  <br>
  <br>
  The plot above can be devided into four quadrants, at the top left we have low duration and high distance, 
  to right is the highh duration and large distance, the bottom left is the low duration and small distance 
  and the bottom right with large duration and small distance. Firstly we see that subscribers have the least 
  duration and so are on the left and customers the most duration on the right. The trend of the age groups >60
   and < 20 which we have been following is repeated with both covering the least distance in both cases of customers
    and subscribers.
    <br>
    <br>
    <img src="images/dot.png" alt="chart">
  `
  ,
  `The tmdb dataset while being a wonderful dataset of movies also serves
  as the basis for my analysis into the popularityof movies and their respective genres.
  In this analysis I tried to understand the relationship between release dates, budgets and genres
  of movies and how they relate to movie popularity.The data set contains information about 
  10,000 movies collected from The Movie Database (TMDb), including user ratings and revenue.
  It can be accessed from kaggle here <a src="" id="spec">Database_TMDb_movie_data/tmdb-movies.csv</a>
  <br>
  <br>
  <b>Observations</b>
  <br>
  <br>
  Adventure movies seem to have occured the most times as the most popular genre. This
   might not be accurate since many movies have sub-genres and this was not fully explored
  <br>
  <br>
  <img src="images/bar1.png" alt="chart">
  <br>
  <br>
  The months do affect the revenue and we see that june and december have the higher
   revenues which is understandable for december since it is associated with free time and public holidays.
   <br>
   <br>
  <img src="images/bar2.png" alt="chart">
  <br>
  <br>
  With the average popularity being 0.69 and the average budget as 1.9e+7 it is possible that 
  the bigger companies which have a larger budget on average than the average total budget produce
   more popular movies
   <br>
   <br>
   <img src="images/bar3.png" alt="chart">
  `,

  `I trained a neural network to be able to take as input, cranial scans and
  produce a probability rating of the presence or absence of a brain tumor.
  The dataset used in training contained images of brain scans with and witout tumors...`,
  `An app that scrapes the CBN website for the current exchange rate. It goes on the site and gets the latest exchange
  rates while presenting an option to save the current rates as a csv file or not.
  The code is given below
  <br>
  <br>
  <pre><code>
<i>#import necessary packages</i>
import pandas as pd
import requests
from bs4 import BeautifulSoup
import os
import datetime


<i>create the directory to save downloaded csv file</i>
path='exchange_data'
if not os.path.exists('exchange_data'):
    os.makedirs('exchange_data')
headers = {'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36','referer':'https://www.cbn.gov.ng/'}
response=requests.get('https://www.cbn.gov.ng/rates/exchratebycurrency.asp',headers = headers)
if response.status_code == 403 or response.status_code == 401:
    print("The request has been denied")
    exit()
soup=BeautifulSoup(response.content,'lxml')

ans = soup.find('a',text=' Export Exchange Rate Results to Excel / CSV ')
href=ans['href']
url= ('https://www.cbn.gov.ng' + href)
with open('exchange_data/exchange.csv','w') as file:
    content=requests.get(url)
    file.write(content.content.decode())

    
df=pd.read_csv('exchange_data/exchange.csv')
todaytime=datetime.date.today()
today=todaytime.strftime('%#m/%#d/%Y')
try:
    todays_rates=df.loc[today]
except:
    try:
        print("Todays rates are not up yet.... Do you want yesterdays rates?.... (Y/N)")
        yesterday = input(">> ")
        if yesterday.lower() == 'n':
            exit()
        elif yesterday.lower() == 'y':
            delta=datetime.timedelta(days=1)
            day = todaytime - delta
            day = day.strftime('%#m/%#d/%Y')
            todays_rates=df.loc[day]
        else:
            print('option not recognized')
    except:
        print("Yesterdays rate not available, should I print the latest rates?.... (Y/N)")
        latest = input(">> ")
        if latest.lower() == 'n':
            exit()
        elif latest.lower() == 'y':
            day = df.index[0]
            todays_rates=df.loc[day]
        else:
            print('option not recognized')
    
print(todays_rates[["Rate Date","Currency","Rate Year","Rate Month"]].rename(columns={'Rate Date':'Currency','Currency':'Year','Rate Year':'Month','Rate Month':'Buying Rate'}))
input('Press enter to continue...')
print("Do you want to keep exchange rate csv file?... (Y/N)")

ans=input('>>')
if ans.lower() == 'n':
    try:
        os.remove("exchange_data/exchange.csv")
    except:
        print("File does not exist")
elif ans.lower() == 'y':
    print("collect csv from the folder exchange_data in current directory")
else:
    print('option not recognized')


input("Press Enter to exit...")
  </code></pre>`,
  `The Pharmacy management system is a web app i designed for the use of pharmacists
  in hospitals, it serves as an interface for a database system. i also took this further by
  writing a script for a client.py app which is used by the doctors to know the kind of drugs available
   in the pharmacy and so know what to prescribe. This <a href="http://victorimiel.pythonanywhere.com" color="blue" id="spec">link</a>
    leads to the pharmacy management webapp.
    Here is the client.py code
   <br>
   <pre><code>
import requests
import json
from tkinter import *
from tkinter import ttk


# details = {"name": 'paracetamol', "brand": 'emzor'}
# url = f'''http://127.0.0.1:5000/searchinfo/{json.dumps(details)}'''
# data = requests.get(url)
# response = json.loads(data.content)

# if response == []:
#     print("Not available")
# else:
#     print(response)
def pressed():
    details = {}
    details["name"] = drug.get()
    details["brand"] = None
    url = f'''http://127.0.0.1:5000/doctorsrequest?name={details['name']}'''
    print(url)
    data = requests.get(url)
    response = json.loads(data.content)
    if response == []:
        #print("Not Available")
        output["text"] = "Not Available"
    else:
        text = ""
        for i in response:
            med = ""
            for j in i:
                med = med + str(j) + "  "
            text = text + med + "\n"
        output["text"] = text


root = Tk()

Frame = ttk.Frame(root, padding = 10)
Frame.grid()
drug = StringVar()

drug_label = Label(Frame,text = "Drug Name",foreground="Green")
drug_label.grid(row = 0,column = 0)
input_drug = Entry(Frame, width=20,background="black",foreground="green", textvariable=drug,font=20, cursor="plus #0000FF")
input_drug.grid(row = 1, column=0,ipadx=10, ipady=10)

output = Label(Frame, text="Answer here")
output.grid(row = 2, column = 0, pady=30)

button = Button(Frame, text="SEARCH", command = pressed)
button.grid()

root.mainloop()

   </code></pre>
<br>
`
]


  emp = ``

  for(let i=0;i < outerId.length;i+=1){
    emp = emp +  `
    <div id=${outerId[i]}>
        <div id="inner-project">
            <h1>${header[i]}</h1>
            <p>`+paragraphs[i]+`</p></div>`
    
    
  }
  
//
let images = ['athena12.jpg', 'bahwor card.png', 'barcawh.jpg',
 'baw.jpg', 'bearlast.jpg', 'BULBRTFRTHH.jpg', 'burger2.jpg',
  'chegue1r.jpg', 'dat guyshaded.jpg', 'dreeee.jpg', 'eago1.jpg', 
  'ETHEREUM ACADEMIC.jpg', 'final.jpg', 'harl.jpg',
  'hyu (2).jpg', 'jblads (2).jpg', 'jokermon.jpg', 'liony.jpg', 'logo molo 123.png',
 'moi5.jpg', 'ojierou.jpg', 'samcorrectedbrick.jpg', 'tiger.jpg', 'victor2.jpg', 'WER (2).jpg', 'worly.jpg']
let ims = ``
let dir = 'images/image-js/graphics/'
for(let i=0;i<images.length;i++){
    ims = ims + `<img src="${dir+images[i]}" class="graph-ims" alt="image" onclick=myFunc(this)>`
}
let graphics = `<h1>Graphics</h1>
<div id="main">
<div id=close-btn onclick=closeim()>X</div>
<img id="container">
</div>
<div id='graphics'>${ims}<div/>`
//
//projects.innerHTML = projects.innerHTML + emp + graphics
ans = ``
for(let x=0;x<header.length;x+=1){
    ans = ans + `
        <li><a href=#${outerId[x]}>${header[x]}</a></li>
    `
}
list.innerHTML = `<ol>${ans}</ol>`

function myFunc(imgs){
    let close = document.getElementById("close-btn")
    let container = document.getElementById("container")
    container.src = imgs.src
    close.style.display = "block"
}
function myFuncAu(imgs){
    let close_ = document.getElementById("close-btnAu")
    let container_ = document.getElementById("containerAu")
    container_.src = imgs.src
    container_.style.display="block"
    close_.style.display = "block"
}
function closeim(){
    let close = document.getElementById("close-btn")
    let container = document.getElementById("container")
    container.src = ''
    close.style.display = "none"
}
function closeimAu(){
    let close_ = document.getElementById("close-btnAu")
    let container_ = document.getElementById("containerAu")
    container_.style.display='none'
    close_.style.display = "none"
}
//
let cad = ['biker.png', 'carfine.jpg', 'edibon.png',
 'free energee  remix - Copy.jpg', 'rickshaw3-Temp0006.png',
  'Screenshot (349).png', 'shockabsorber.jpg', 'supercar.jpg']
  let csd = ``
  let dir2 = 'images/image-js/CAD/'
  for(let i=0;i<cad.length;i++){
    csd = csd + `<img src="${dir2+cad[i]}" class="graph-ims" alt="image" onclick=myFuncAu(this)>`
}
let cadPics = `<h1>AutoCad</h1>
<div id="main">
<div id=close-btnAu onclick=closeimAu()>X</div>
<img id="containerAu">
</div>
<div id='CAD'>${csd}<div/>`
projects.innerHTML = projects.innerHTML + emp + graphics + cadPics
