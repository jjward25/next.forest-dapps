import pandas as pd
import json
from operator import itemgetter

## Initial Excel reading and dataframe creation
dapps_df = pd.read_excel('C:/Users/Josep/OneDrive/Desktop/Coding/next.forest-dapps/TheForest.xlsx',engine='openpyxl',na_values="", sheet_name="ManualData")
#print(articleDF)
inputObj = dapps_df.to_dict(orient='index')  ## Turns every row into an object
#print(inputObj)


dappList = []
for contentRowObj in inputObj.values():
        if contentRowObj['Provider'] not in dappList:
            dappList.append(contentRowObj['Provider'])           
#print(catList)

########
# Create arrays of category objects 
########
contentObjList = []
for dapp in dappList:
    #print(category)
    dappObjList = []
    dappDupes = []
    dappNames=[]
    for contentRowObj in inputObj.values():
        if contentRowObj['Provider'] == dapp:
            dappDict = {}   
            dappDict.setdefault("Provider",contentRowObj['Provider'])
            dappDict.setdefault("Category",contentRowObj['Category'])
            dappDict.setdefault("CategoryPriority",contentRowObj['CategoryPriority'])
            dappDict.setdefault("CategoryDescription",contentRowObj['CategoryDescription'])
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
            
            dappObjList = [i for n, i in enumerate(dappDupes) if i not in dappObjList[n + 1:]] 
            dappObjList = sorted(dappObjList, key=itemgetter('Provider'))  
            if contentRowObj['Provider'] in dappNames:
               continue
            else:
                dappDupes.append(dappDict)
                dappNames.append(contentRowObj['Provider']) ## Fill list w postNames so the next time the postName comes up it's in the list and no object will be created    
            contentObjList.append(dappDict)
#print(contentObjList)



with open("dappList.json", "w") as write_file:
    json.dump(contentObjList, write_file, indent=4)
