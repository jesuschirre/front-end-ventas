import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
  Button
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "@/data";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export function Tables() {
  const [clientes, setClientes] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch("https://back-ventas.onrender.com/api/clientes")
      .then((response) => response.json())
      .then((data) => setClientes(data))
      .catch((error) => {
        console.error("Error al obtener los clientes:", error); 
      });
  }, []); // Agregado array de dependencias vacío

  useEffect(() => {
    fetch("https://back-ventas.onrender.com/api/usuarios")
      .then((response) => response.json())
      .then((data) => setUsuarios(data))
      .catch((error) => {
        console.error("Error al obtener los usuarios:", error);
      });
  },[])

  useEffect(() => {
    fetch("https://back-ventas.onrender.com/api/producto")
    .then((response) => response.json())
    .then((data) => setProductos(data))
    .catch((error) => {
      console.error("Error al obtener los productos:", error);
    });
  }, [])

  useEffect(() => {
    fetch("https://back-ventas.onrender.com/api/categoria")
      .then((response) => response.json())
      .then((data) => setCategorias(data))
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      });
  },[])



  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      
      {/* Tabla de Clientes */}
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Clientes
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["id","Nombre", "Teléfono","createdAt"].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {clientes.map((cliente, index) => {
                const className = `py-3 px-5 ${
                  index === clientes.length - 1
                    ? ""
                    : "border-b border-blue-gray-50"
                }`;
                return (
                  <tr key={cliente.id}>
                    <td className={className}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {cliente.id}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {cliente.nombre}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {cliente.telefono}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                        >
                          {cliente.createdAt}
                        </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>

          </table>
        </CardBody>
      </Card>

       {/* Tabla de usuarios */}
       <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Usuarios
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["id","Usuario"].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {usuarios.map((usuario, index) => {
                const className = `py-3 px-5 ${
                  index === usuarios.length - 1
                    ? ""
                    : "border-b border-blue-gray-50"
                }`;
                return (
                  <tr key={usuario.id}>
                    <td className={className}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {usuario.id}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {usuario.usuario}
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>

          </table>
        </CardBody>
      </Card>

       {/* Tabla de productos */}
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Productos
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-2 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
                <tr>
                  {["id","Nombre","Precio","stock","categoria"].map((el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-2 px-4 text-left"
                    >
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
            </thead>
            
            <tbody>
              {productos.map((producto, index) => {
                const categoria = categorias.find(cat => cat.id === producto.categoriaId);
                const className = `py-3 px-5 ${
                  index === productos.length - 1
                    ? ""
                    : "border-b border-blue-gray-50"
                }`;
                return (
                  
                  <tr key={producto.id}>
                    
                    <td className={className}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {producto.id}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {producto.nombre}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {producto.precio}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                        >
                          {producto.stock}
                        </Typography>
                    </td>
                    <td className= {className}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                        >
                          {categoria ? categoria.nombre : "Sin categoría"}
                        </Typography>
                    </td>

                    <td className={className}>
                        <Typography
                          as="a"
                          href="#"
                          className="text-xs font-semibold text-blue-gray-600"
                        >
                          remove
                        </Typography>
                    </td>
                    <td className={className}>
                        <Typography
                          as="a"
                          href="#"
                          className="text-xs font-semibold text-blue-gray-600"
                        >
                          Edit
                        </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>

          </table>
        </CardBody>
      </Card>        

      {/* Tabla de Autores */}
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Authors Table
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["author", "function", "status", "employed", ""].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {authorsTableData.map(
                ({ img, name, email, job, online, date }, key) => {
                  const className = `py-3 px-5 ${
                    key === authorsTableData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={name}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <Avatar src={img} alt={name} size="sm" variant="rounded" />
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {name}
                            </Typography>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {email}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {job[0]}
                        </Typography>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          {job[1]}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Chip
                          variant="gradient"
                          color={online ? "green" : "blue-gray"}
                          value={online ? "online" : "offline"}
                          className="py-0.5 px-2 text-[11px] font-medium w-fit"
                        />
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {date}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography
                          as="a"
                          href="#"
                          className="text-xs font-semibold text-blue-gray-600"
                        >
                          Edit
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>

      {/* Tabla de Proyectos */}
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Projects Table
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["companies", "members", "budget", "completion", ""].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {projectsTableData.map(
                ({ img, name, members, budget, completion }, key) => {
                  const className = `py-3 px-5 ${
                    key === projectsTableData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={name}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <Avatar src={img} alt={name} size="sm" />
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {name}
                          </Typography>
                        </div>
                      </td>
                      <td className={className}>
                        {members.map(({ img, name }, key) => (
                          <Tooltip key={name} content={name}>
                            <Avatar
                              src={img}
                              alt={name}
                              size="xs"
                              variant="circular"
                              className={`cursor-pointer border-2 border-white ${
                                key === 0 ? "" : "-ml-2.5"
                              }`}
                            />
                          </Tooltip>
                        ))}
                      </td>
                      <td className={className}>
                        <Typography
                          variant="small"
                          className="text-xs font-medium text-blue-gray-600"
                        >
                          {budget}
                        </Typography>
                      </td>
                      <td className={className}>
                        <div className="w-10/12">
                          <Typography
                            variant="small"
                            className="mb-1 block text-xs font-medium text-blue-gray-600"
                          >
                            {completion}%
                          </Typography>
                          <Progress
                            value={completion}
                            variant="gradient"
                            color={completion === 100 ? "green" : "gray"}
                            className="h-1"
                          />
                        </div>
                      </td>
                      <td className={className}>
                        <Typography
                          as="a"
                          href="#"
                          className="text-xs font-semibold text-blue-gray-600"
                        >
                          <EllipsisVerticalIcon
                            strokeWidth={2}
                            className="h-5 w-5 text-inherit"
                          />
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}

export default Tables;
