<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Vue_SPA_SingleApp</title>

    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
    <div class="container">
        <h1>Laravel APA, Single Apps With Vue Js</h1>        
    </div>
    <section id="app">

    </section>

    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>