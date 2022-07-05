# Define the filename here you want to replace content in
FileName = "README.md"

with open(FileName, 'r') as f:
    contents = f.read()
    # Define the first line where your content will be replaced / added 
    contents = contents.replace('MarketingPipeline/Fork-Me', 'MarketingPipeline/Media-Element')
    
with open(FileName, 'w') as f:
    f.write(contents)   
    
