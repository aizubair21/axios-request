<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.


## About Project

- This is a project build by using laravel. build testing purpose. here I make test using axios request inside from a blade file.
- This is aims to make a SPA like application. All CRUD operation done with axios. so no page loading to add or delete data. also open create form.

## How To Work 

- Page loading required to navigate one page to another page. but, no page loading to CRUD
- When you come to CRUD index page. a Ajux request automaticly send to server and get response by all CRUD data. data won't come with page navigate. page loading quit fast.
- Cliend side JavaScript get the server response with an html page instead of raw-array data.
- Then cliend side JavaScript show html data to DOM. this feel like SPA application. but CSR instead of SSR, which is unuseful for SEO.
- When you aware to add some todo. by clicking add or create button a popup modal with form immediately shown to you. this stop preventing navigate to another page.
- Fill-up the form. as soon as click save or store button another function is called. function prevent to page loading. function takes the input value of form.
- Then send a request to server with data.
- Server save data and return with response success of error.
- Geeting server response front end JavaScript immediately send another Axios request server to get all crud data. then do first 3 and 4 steaps.
- On delete data. Another Axios request send to server with target data id. server delete data and return response with success or error.
- Geting response by client side do first 3 and 4 steaps. 
