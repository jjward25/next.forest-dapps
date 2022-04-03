import pandas as pd
import json
from operator import itemgetter

## Initial Excel reading and dataframe creation
dapps_df = pd.read_excel('C:/Users/Josep/OneDrive/Desktop/Coding/next.forest-dapps/TheForest.xlsx',engine='openpyxl',na_values="", sheet_name="ManualData")
#print(articleDF)
inputObj = dapps_df.to_dict(orient='index')  ## Turns every row into an object
#print(inputObj)


catList = []
for contentRowObj in inputObj.values():
        if contentRowObj['Category'] not in catList:
            catList.append(contentRowObj['Category'])           
#print(catList)

########
# Create arrays of category objects 
########
contentObjList = []
for category in catList:
    #print(category)
    catObjList = []
    catDupes = []
    catNames=[]
    for contentRowObj in inputObj.values():
        if contentRowObj['Category'] == category:
            catDict = {}   
            catDict.setdefault("Category",contentRowObj['Category'])
            catDict.setdefault("CategoryPriority",contentRowObj['CategoryPriority'])
            catDict.setdefault("CategoryDescription",contentRowObj['CategoryDescription'])
            
            catObjList = [i for n, i in enumerate(catDupes) if i not in catObjList[n + 1:]] 
            catObjList = sorted(catObjList, key=itemgetter('CategoryPriority'))  
            if contentRowObj['Category'] in catNames:
               continue
            else:
                catDupes.append(catDict)
                catNames.append(contentRowObj['Category']) ## Fill list w postNames so the next time the postName comes up it's in the list and no object will be created    
            contentObjList.append(catDict)
#print(contentObjList)

for catObj in contentObjList:    
    #print(catObj) 
    dappList = []
    dappDupes = []
    dappNames = []
    
## Iterate through the dataset rows for category match, then create the post objects to append to the dapp array

    for contentRowObj in inputObj.values():
        if contentRowObj['Category'] == catObj['Category'] :
            dappDict = {}
            dappDict.setdefault("Provider",contentRowObj['Provider'])
            dappDict.setdefault("Tags",contentRowObj['Tags'].split (","))
            dappDict.setdefault("AppLogo",contentRowObj['AppLogo'])
            dappDict.setdefault("AppDescription",contentRowObj['AppDescription'])
            dappDict.setdefault("Founders",contentRowObj['Founders'])

            dappDict.setdefault("Investors",contentRowObj['Investors'])
            dappDict.setdefault("Audience",contentRowObj['Audience'])
            dappDict.setdefault("MaxTPS",contentRowObj['MaxTPS'])
            dappDict.setdefault("Screenshots",contentRowObj['Screenshots'])
            dappDict.setdefault("BizDev",contentRowObj['BizDev'])
            dappDict.setdefault("UseApp",contentRowObj['UseApp'])
            dappDict.setdefault("Website",contentRowObj['Website'])
            dappDict.setdefault("Github",contentRowObj['Github'])
            dappDict.setdefault("Whitepaper",contentRowObj['Whitepaper'])
            dappDict.setdefault("Telegram",contentRowObj['Telegram'])
            dappDict.setdefault("Twitter",contentRowObj['Twitter'])
            dappDict.setdefault("Discord",contentRowObj['Discord'])
            dappDict.setdefault("TokenFlag",contentRowObj['TokenFlag'])
            dappDict.setdefault("FeaturedFlag",contentRowObj['FeaturedFlag'])
            dappDict.setdefault("Ticker",contentRowObj['Ticker'])
            dappDict.setdefault("MarketCap",contentRowObj['MarketCap'])
            dappDict.setdefault("MarketCapRank",contentRowObj['MarketCapRank'])
            dappDict.setdefault("TVL",contentRowObj['TVL'])
            dappDict.setdefault("24hTransactions",contentRowObj['24hTransactions'])
            dappDict.setdefault("24hActiveUsers",contentRowObj['24hActiveUsers'])
            dappDict.setdefault("UniqueMonthlyUsers",contentRowObj['UniqueMonthlyUsers'])
            dappDict.setdefault("Price",contentRowObj['Price'])
            dappDict.setdefault("StakingAPY",contentRowObj['StakingAPY'])
            dappDict.setdefault("StakingAPYConsistency",contentRowObj['StakingAPYConsistency'])
            
            if contentRowObj['Provider'] not in dappNames:
                dappDupes.append(dappDict)
                dappNames.append(contentRowObj['Provider']) ## Fill list w dappnames so the next time the dappname comes up it's in the list and no object will be created
            else:
                continue
        else:
            continue
    dappList = [i for n, i in enumerate(dappDupes) if i not in dappList[n + 1:]]  
    dappList = sorted(dappList, key=itemgetter('Provider'))  
    catObj.setdefault("DappList",dappList)
#print(catObjList)


with open("contentMap.json", "w") as write_file:
    json.dump(contentObjList, write_file, indent=4)
