# Define the filename here you want to replace content in
FileName = "README.md"

with open(FileName, 'r') as f:
    contents = f.read()
    # Define the first line where your content will be replaced / added 
    contents = contents.replace('fork-me.min.js', 'media-element.min.js')
    contents = contents.replace('fork-me.js', 'media-element.js')
    contents = contents.replace('Fork-Me.js', 'Media-Element.js')
    
    
with open(FileName, 'w') as f:
    f.write(contents)   
    
