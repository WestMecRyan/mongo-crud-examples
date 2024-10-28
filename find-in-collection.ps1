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

# Output the response
Write-Output $response
