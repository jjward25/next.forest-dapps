import pandas as pd
import json

## Initial Excel reading and dataframe creation
dapps_df = pd.read_excel('C:/Users/Josep/OneDrive/Desktop/Coding/next.forest-dapps/TheForest.xlsx',engine='openpyxl',na_values="", sheet_name="ManualData")
#print(articleDF)
inputObj = dapps_df.to_dict(orient='index')  ## Turns every row into an object
print(inputObj)