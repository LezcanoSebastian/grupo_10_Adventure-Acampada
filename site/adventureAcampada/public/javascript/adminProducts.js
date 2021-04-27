console.log('JS adminProducts success');

const productsBox = document.getElementById('productsBox');
const selectOrder = document.getElementById('order');
const selectLimit = document.getElementById('limit');
const paginationBox = document.getElementById('paginationBox');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

window.addEventListener('load', async () => {
    try {
        let response = await fetch('/admin/products/all')
        let result = await response.json()
        console.log(result)

        localStorage.setItem('productos',JSON.stringify(result.productos));
        let productos = JSON.parse(localStorage.getItem('productos'));

        viewProducts(productos)

    } catch (error) {
        console.log(error);
    }
})

const viewProducts = (productos) => {
    productsBox.innerHTML = "";
    for (let i = 0; i < productos.length; i++) {
        
        let item = `
        <tr>
                        <th scope="row">${productos[i].id}</th>
                        <td class="imagenTabla">
                             <img src="/img/products/${productos[i].imagenes[0].image}" alt="imagen de producto">
                        </td>
                        <td>${ productos[i].name}</td>
                        <td class="text-center">${ toThousand(productos[i].price)}</td>
                        <td class="text-center">${ toThousand(productos[i].price - parseInt(productos[i].price * productos[i].discount / 100))} </td>
                        <td class="text-center">${ productos[i].discount }</td>
                        <td class="text-center">${ productos[i].stock }</td>
                        <td>${ productos[i].description != 'undefined' ? productos[i].description : 'No' }</td>
                        <td>${ productos[i].categoria.nombre }</td>
                        
                        <td>
                            <a href="/admin/products/edit/ ${productos[i].id}" class="btn btn-success"><i class="far fa-edit"></i></a>
                        </td>
                        <td>
                            
                            <form action="/admin/products/delete/${productos[i].id}?_method=DELETE " method="POST">
                                <button type="submit" class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
                            </form>
                        
                        </td>
            
            
        </tr>
        `
        productsBox.innerHTML += item
    }

}

selectOrder.addEventListener('change', () => {
    const productos = JSON.parse(localStorage.getItem('productos'));

    switch (selectOrder.value) {
        case 'nombre':
            productos.sort( (a,b) => (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0)
            localStorage.setItem('productos',JSON.stringify(productos));
            viewProducts(productos)
            break;
        case 'mayorPrecio':
            productos.sort( (a,b) => (a.price < b.price) ? 1 : (a.price > b.price) ? -1 : 0)
            localStorage.setItem('productos',JSON.stringify(productos));
            viewProducts(productos)
            break;
        case 'menorPrecio':
            productos.sort( (a,b) => (a.price > b.price) ? 1 : (a.price < b.price) ? -1 : 0)
            localStorage.setItem('productos',JSON.stringify(productos));
            viewProducts(productos)
            break;
        case 'descuento':
            productos.sort( (a,b) => (a.discount < b.discount) ? 1 : (a.discount > b.discount) ? -1 : 0)
            localStorage.setItem('productos',JSON.stringify(productos));
            viewProducts(productos)
            break;
        case 'categoria':
            productos.sort( (a,b) => (a.categoria.nombre > b.categoria.nombre) ? 1 : (a.categoria.nombre < b.categoria.nombre) ? -1 : 0)
            localStorage.setItem('productos',JSON.stringify(productos));
            viewProducts(productos)
            break;
        default:
            productos.sort( (a,b) => (a.id > b.id) ? 1 : (a.id < b.id) ? -1 : 0)
            localStorage.setItem('productos',JSON.stringify(productos));
            viewProducts(productos)
            break;
    }
})

selectLimit.addEventListener('change', () => {
    pagination(JSON.parse(localStorage.getItem('productos')),selectLimit.value,1)
})

const pagination = (array, limit, current) => {
    const total = array.length;
    const pages = Math.ceil(total/limit);
    sessionStorage.setItem('pages',pages);

    paginationBox.innerHTML = `<li class="page-item goFirst" hidden><a class="page-link" href="">&laquo</a></li>`

    for (let i = 1; i <= pages; i++) {
        
        let page = `<li class="page-item ${current == i ? 'active' : ''}" id="pag${i}">
                        <a class="page-link" href="">${i}</a>
                    </li>`
        paginationBox.innerHTML += page
    }

    paginationBox.innerHTML += `<li class="page-item goLast"><a class="page-link" href="">&raquo</a></li>`

    let productos = array.slice(0,limit)

    viewProducts(productos)

}

paginationBox.addEventListener('click',(e) => {
    e.preventDefault()
    const goFirstPage = document.querySelector('.goFirst');
    const goLastPage = document.querySelector('.goLast');

    const page = e.target.parentElement;
    
    let items = document.querySelectorAll('.page-item');

    items.forEach(item => item.classList.remove('active'));

    page.classList.add('active');

    page.innerText == 1 ? goFirstPage.setAttribute('hidden',true) : goFirstPage.removeAttribute('hidden');
    page.innerText == sessionStorage.getItem('pages') ? goLastPage.setAttribute('hidden',true) : goLastPage.removeAttribute('hidden');

    goPage(JSON.parse(localStorage.getItem('productos')),page.innerText,selectLimit.value);

    if(page.classList.contains('goFirst')){

        items.forEach(item => item.innerText == 1 ? item.classList.add('active') : item.classList.remove('active'));
        goFirstPage.setAttribute('hidden',true);

        goPage(JSON.parse(localStorage.getItem('productos')),1,selectLimit.value);
    }

    if(page.classList.contains('goLast')){

        items.forEach(item => item.innerText == sessionStorage.getItem('pages') ? item.classList.add('active') : item.classList.remove('active'));
        goLastPage.setAttribute('hidden',true);

        goPage(JSON.parse(localStorage.getItem('productos')),sessionStorage.getItem('pages'),selectLimit.value);
    }

})

const goPage = (array,current,limit) => {
    let offset = (limit * current) - limit;

    let productos = array.slice(offset, limit * current);

    viewProducts(productos)

}

/*const viewProducts = (productos) => {
    productsBox.innerHTML = "";
    for (let i = 0; i < productos.length; i++) {
        
        let item = `
        <tr>
            
            <th scope="row">${productos[i].id}</th>
            <td>${productos[i].name}</td>
            <td>${productos[i].description}</td>
            <td class="text-end">$ ${productos[i].price}</td>
            <td class="text-center">${productos[i].discount}%</td>
            <td>${productos[i].categoria.nombre}</td>
        </tr>
        `
        productsBox.innerHTML += item
    }

} */