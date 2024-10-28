# Define the base URL
$baseUrl = "http://localhost:3000/"

# Define headers
$headers = @{
  "Content-Type" = "application/json"
}

# Define collection name
$collectionName = "myCollection"

# Construct the full URL by appending the action
$mongoApiUrl = $baseUrl + "find/" + $collectionName

# Send GET request to find documents
$response = Invoke-RestMethod -Uri $mongoApiUrl -Method GET -Headers $headers

# Convert the response to JSON format
$jsonData = $response | ConvertTo-Json -Compress

# Define the output JSON file path
$outputFile = ".\foundDocuments.json"

# Save the JSON data to a file
$jsonData | Out-File -FilePath $outputFile -Encoding utf8

# Output a message indicating success
Write-Output "Documents saved to $outputFile"
