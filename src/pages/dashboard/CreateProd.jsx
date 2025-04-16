import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '@material-tailwind/react';

export function CreateProd() {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');
  const [categoriaId, setCategoriaId] = useState('');
  const [nombreCategoria, setNombreCategoria] = useState('');
  const [nombreCliente, setNombreCliente] = useState('');
  const [telefonoCliente, setTelefonoCliente] = useState('');

  const crearProducto = async (e) => {
    e.preventDefault();
    try {
      const nuevoProducto = {
        nombre,
        precio: parseFloat(precio),
        stock: parseInt(stock),
        categoriaId: parseInt(categoriaId)
      };

      const response = await axios.post(
        'https://back-ventas.onrender.com/api/producto',
        nuevoProducto,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      console.log('Producto creado:', response.data);
    } catch (error) {
      console.error('Error al crear producto:', error);
    }
  };

  const crearCategoria = async (e) => {
    e.preventDefault();
    try {
        const nuevaCategoria = {
            nombre: nombreCategoria,
        }
        const response = await axios.post(
            'https://back-ventas.onrender.com/api/categoria',
            nuevaCategoria,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        console.log('Producto creado:', response.data);
        setNombreCategoria('');

    } catch (error) {
        console.error('Error al crear producto:', error);
    }};


   const createcliente = async (e) => {
        e.preventDefault();
            try {
                const nuevoCliente = {
                    nombre: nombreCliente,
                    telefono: telefonoCliente
                }
                const response = await axios.post(
                    "https://back-ventas.onrender.com/api/clientes",
                    nuevoCliente,
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                )
                console.log('Cliente creado:', response.data);
                setNombreCliente('');
                setTelefonoCliente('');
            } catch (error) {
                console.error('Error al crear cliente:', error);
            }
  }

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-2xl font-bold'>Crear Producto</h1>
      <form className='flex flex-col gap-4' onSubmit={crearProducto}>
        <label>Nombre del producto</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />

        <label>Precio</label>
        <input type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} />

        <label>Stock</label>
        <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} />

        <label>Categoría ID</label>
        <input type="number" value={categoriaId} onChange={(e) => setCategoriaId(e.target.value)} />

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Crear producto
        </button>
      </form>

      <h1 className='text-2xl font-bold'>Crear Categoria</h1>
      <form className='flex flex-col gap-4' onSubmit={crearCategoria} >
        <label>Nombre del categoria</label>
        <input type="text" value={nombreCategoria} onChange={(e) => setNombreCategoria(e.target.value)} />
        <button type="submit"  className="bg-blue-500 text-white p-2 rounded">
          Crear categoria
        </button>
      </form>

      <h1 className='text-2xl font-bold'>Crear nuevo Cliente</h1>
      <form className='flex flex-col gap-4'  onSubmit={createcliente} >
        <label>Nombre del cliente</label>
        <input type="text" value={nombreCliente} onChange={(e) => setNombreCliente(e.target.value)}/>
        <label>telefono</label>
        <input type="number" value={telefonoCliente} onChange={(e) => setTelefonoCliente(e.target.value)}/>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Crear cliente
        </button>
      </form>
    </div>

  );
}
