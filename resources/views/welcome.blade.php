<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"  />

        
    </head>
    <body class="container mt-5" >
        <div class="d-flex justify-content-between w-100">
            <div>
                All Data
            </div>

            <button class="btn btn-outline-info btn-sm" data-bs-toggle="modal" data-bs-target="#addModal">
                <i class="fas fa-plus me-3"></i> New 
            </button>
        </div>
        <table class="table">
            <thead>
                <th>#</th>
                <th>Id </th>
                <th>Name </th>
                <th>Email </th>
                <th>Phone </th>
                <th>Address </th>
                <th>E/D</th>
            </thead>
            <tbody id="home_tbody">
                
            </tbody>
        </table>


        {{-- add modal --}}
        <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form action="get/store" method="post" id="insertForm">
                        @csrf
                        <div class="mb-3">
                            <label for="name" class="form-label">Name :</label>
                            <input type="text" name="name" id="name" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label for="emaili" class="form-label">Email :</label>
                            <input type="email" name="email" id="email" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label for="phone" class="form-label">Phone :</label>
                            <input type="number" name="phone" id="phone" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label for="adderss" class="form-label">Address :</label>
                            <input type="text" name="address" id="address" class="form-control">
                        </div>
                        <div class="mb-3 float-right">
                            <button class="btn btn-outline-success btn-md float-right">Save </button>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>


        {{-- edit modal --}}
        <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Data</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body edit-modal-body" >
                  
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary closeUpdateModal" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
        </div>

    </body>
    {{-- <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js" ></script> --}}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.3.5/axios.min.js" ></script>
    <script src="{{asset('public/assets/js/main.js')}}"></script>

</html>
