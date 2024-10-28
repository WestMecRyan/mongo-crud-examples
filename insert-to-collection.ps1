$baseUrl = "http://localhost:3000/"

$headers = @{
  "Content-Type" = "application/json"
}

$body = @{
  collection = "myCollection"
  document = @{
    name = "John"
    age = 30
  }
}

# Convert body to JSON and send POST request
$mongoApiUrl = $baseUrl + "insert"
$response = Invoke-RestMethod -Uri $mongoApiUrl -Method POST -Headers $headers -Body ($body | ConvertTo-Json)

# Output the response
Write-Output $response