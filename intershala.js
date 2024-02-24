<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Images Page</title>
    <style>
        body {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding: 20px;
        }

        .user-image {
            width: 120px;
            height: 120px;
            margin: 10px;
            overflow: hidden;
            border-radius: 50%;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .user-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    </style>
</head>
<body>
    <script>
        const imageData = [
            {"image": "C:\Users\V.THARUN KUMAR\Desktop\DSA\MYPHOTO\MYPHOTO35KB.jpg"},
            {"image": "url1"},
            {"image": "url1"},
            {"image": "url1"},
            {"image": "url1"},
            {"image": "url1"},
            {"image": "url1"},
            {"image": "url1"},
            {"image": "url1"},
            {"image": "url1"},
            {"image": "url1"},
            {"image": "url1"},
            {"image": "url1"},
            // Add 23 more image objects with their respective URLs
        ];

        // Dynamically create image elements based on JSON data
        imageData.forEach(item => {
            const userImageDiv = document.createElement('div');
            userImageDiv.className = 'user-image';

            const imgElement = document.createElement('img');
            imgElement.src = item.image;
            imgElement.alt = 'User Image';

            userImageDiv.appendChild(imgElement);
            document.body.appendChild(userImageDiv);
        });
    </script>
</body>
</html>
