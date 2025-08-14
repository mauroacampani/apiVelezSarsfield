import { usePosiciones } from "../hooks/useEstadisticas";
import TablaPosiciones from "../components/TablaPosiciones";
import Layout from "../hocs/Layout";

export default function Home() {
  const { data, loading, error } = usePosiciones();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  const datosTabla = Array.isArray(data) ? data : [data];

 return (
    <Layout>
    <div className="w-full overflow-x-auto rounded-lg shadow-lg">
      <div className="flex flex-col text-center w-full mb-10 mt-4">
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
          Posiciones
        </h1>
      </div>

      <div className="lg:w-200 w-full mx-auto overflow-auto rounded-lg shadow-lg">
        <TablaPosiciones
        tabla_posiciones={datosTabla}
        />
      </div>
    </div>
    </Layout>
  );
}