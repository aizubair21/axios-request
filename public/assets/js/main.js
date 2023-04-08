

function getData() {
    document.querySelector("#home_tbody").innerHTML = '';


    axios.get('get/data')
        .then((res) => {
            // console.log(res.data);
            createElement(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
};

function createElement(data) {

    data.forEach((item, index) => {
        let tr = document.createElement('tr');
        let td_one = document.createElement('td')
        tr.appendChild(td_one);
        td_one.innerHTML = ++index;
        let td_id = document.createElement('td')
        tr.appendChild(td_id);
        td_id.innerHTML = item.id;
        let td_two = document.createElement('td')
        tr.appendChild(td_two);
        td_two.innerHTML = item.name;
        let td_three = document.createElement('td')
        tr.appendChild(td_three);
        td_three.innerHTML = item.email;
        let td_four = document.createElement('td')
        tr.appendChild(td_four);
        td_four.innerHTML = item.phone;
        let td_five = document.createElement('td')
        tr.appendChild(td_five);
        td_five.innerHTML = item.address;
        let td_six = document.createElement('td')
        tr.appendChild(td_six)
        let btn_edit = document.createElement('button')
        btn_edit.innerText = 'edit';
        btn_edit.classList.add("btn");
        btn_edit.classList.add("btn-sm");
        btn_edit.classList.add("btn-info");
        btn_edit.setAttribute('data-id', item.id);
        btn_edit.setAttribute('data-bs-toggle', "modal");
        btn_edit.setAttribute('data-bs-target', "#editModal");
        btn_edit.addEventListener("click", (e) => {
            editData(item.id, item.name, item.email, item.phone, item.address);
        });
        td_six.appendChild(btn_edit);


        let td_seven = document.createElement('td')
        tr.appendChild(td_seven)
        let btn_dlt = document.createElement('button')
        btn_dlt.innerText = 'delet';
        btn_dlt.classList.add("btn");
        btn_dlt.classList.add("btn-sm");
        btn_dlt.classList.add("btn-danger");
        btn_dlt.setAttribute('data-id', item.id);
        btn_dlt.addEventListener("click", (e) => {
            let trId = e.target.dataset.id;
            axios.get('data/delete', {
                params: {
                    id: trId
                }
            })
                .then((res) => {
                    if (res.data == "success");
                    alert("Data Deleted !")
                    getData();
                })
                .catch((err) => {
                    console.log(err);
                })
        });
        td_seven.appendChild(btn_dlt);


        document.querySelector("#home_tbody").append(tr);
    });

}


// edit and upate 

function editData(id = null, name = null, email = null, phone = null, address = null) {
    let modalBody = document.querySelector('.edit-modal-body');
    if (modalBody.querySelector("#submitForm")) {
        modalBody.querySelector("#submitForm").remove();
    }
    // modalBody.innerHTML = 'finding....';
    // let tr;
    let form = document.createElement('form')
    form.setAttribute('action', 'data/update');
    form.setAttribute("id", "submitForm");
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let formData = document.querySelector("#submitForm");
        axios.post('api/data/update', {
            id: formData.querySelector("#hiddenId").value,
            name: formData.querySelector("#name").value,
            email: formData.querySelector("#email").value,
            phone: formData.querySelector("#phone").value,
            address: formData.querySelector("#address").value,
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => {
                // console.log(res.data);
                if (res.data == 'success') {
                    alert('Data Updated !');
                    getData();
                } else {
                    console.log(res.data);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    })

    let hidden_input = document.createElement('input');
    hidden_input.setAttribute('hidden', 'true');
    hidden_input.value = id;
    hidden_input.setAttribute("id", "hiddenId")
    form.appendChild(hidden_input)

    let name_div = document.createElement("div")
    let name_label = document.createElement('label')
    name_label.innerText = "Name :";
    name_div.appendChild(name_label)
    let name_input = document.createElement('input');
    name_input.value = name;
    name_input.classList.add("form-control")
    name_input.classList.add("mb-2")
    name_input.setAttribute("id", "name")
    name_div.appendChild(name_input)
    form.appendChild(name_div)


    let email_div = document.createElement('div');
    let email_label = document.createElement('label')
    email_label.innerText = 'Email: ';
    email_div.appendChild(email_label)
    let email_input = document.createElement('input');
    email_input.value = email;
    email_input.classList.add("form-control")
    email_input.classList.add("mb-2")
    email_input.setAttribute("id", "email")
    email_div.appendChild(email_input)
    form.appendChild(email_div)


    let number_div = document.createElement('div');
    let number_label = document.createElement('label')
    number_label.innerText = 'phone: ';
    number_div.appendChild(number_label)
    let phone_input = document.createElement('input');
    phone_input.value = phone;
    phone_input.classList.add("form-control")
    phone_input.classList.add("mb-2")
    phone_input.setAttribute("id", "phone")
    number_div.appendChild(phone_input)
    form.appendChild(number_div)

    let address_div = document.createElement('div');
    let allress_label = document.createElement('label')
    allress_label.innerText = 'address: ';
    address_div.appendChild(allress_label)
    let address_input = document.createElement('input');
    address_input.value = address;
    address_input.classList.add("form-control")
    address_input.classList.add("mb-2")
    address_input.setAttribute("id", "address")
    address_div.appendChild(address_input)
    form.appendChild(address_div)


    let submitBtn = document.createElement('button');
    submitBtn.classList.add("btn")
    submitBtn.classList.add("btn-md")
    submitBtn.classList.add("btn-primary")
    submitBtn.classList.add("float-right")
    submitBtn.classList.add("mt-2")
    submitBtn.innerHTML = "Update";
    form.appendChild(submitBtn);


    modalBody.append(form);
}


document.querySelector("#insertForm").addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = document.querySelector("#insertForm");
    axios.post('api/data/store', {

        name: formData.querySelector("#name").value,
        email: formData.querySelector("#email").value,
        phone: formData.querySelector("#phone").value,
        address: formData.querySelector("#address").value,
    }, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then((res) => {
            // console.log(res.data);
            if (res.data == 'success') {
                alert('Data Stored !');
                getData();
            } else {
                console.log(res.data);
            }
        })
        .catch((err) => {
            console.log(err);
        })
})

getData();


