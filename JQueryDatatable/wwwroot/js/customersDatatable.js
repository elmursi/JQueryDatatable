$(document).ready(function () {

    $('#customers').DataTable({
        "serverSide": true,
        "ajax": {
            "url": "/api/customers",
            "type": "POST",
            "datatype": "json"
        },
        "columnDefs": [{
            "target": [0],
            "visible": false,
            "searchable": false
        }],
        "columns": [
            { "data": "id", "name": "Id", "autoWidth": true },
            { "data": "firstName", "name": "FirstName", "autoWidth": true },
            { "data": "lastName", "name": "LastName", "autoWidth": true },
            { "data": "contact", "name": "Contact", "autoWidth": true },
            { "data": "email", "name": "Email", "autoWidth": true },
            {
                "render": function (data, type, row) {
                    return '<span>' + row.dateOfBirth.split('T')[0] + '</span>'
                },
                "name": "DateofBirth",
                    
            },
            {
                "render": function (data, type, row) {
                    return '<a href="#" class="btn btn-danger" onclick = DeleteCustomer(' + row.id + ') > Delete</a > ';
                }
            }
        ]
        


        
        
            
    });
});