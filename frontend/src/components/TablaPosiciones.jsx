export default function TablaPosiciones({ tabla_posiciones }) {

    return (
    <table className="table-auto w-full font-semibold  whitespace-no-wrap ">
          <thead>
            <tr>
              <th className="px-4 py-3 bg-gray-100">#</th>
              <th className="px-4 py-3 bg-gray-100">Equipos</th>
              <th className="px-4 py-3 bg-gray-100">PJ</th>
              <th className="px-4 py-3 bg-gray-100">G</th>
              <th className="px-4 py-3 bg-gray-100">E</th>
              <th className="px-4 py-3 bg-gray-100">P</th>
              <th className="px-4 py-3 bg-gray-100">GF</th>
              <th className="px-4 py-3 bg-gray-100">GC</th>
              <th className="px-4 py-3 bg-gray-100">DIF</th>
              <th className="px-4 py-3 bg-gray-100">PTS</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {tabla_posiciones.map((e) => (
              <tr key={e.posiciones}>
                <td className="px-4 py-3">{e.posiciones}</td>
                <td className="flex items-center space-x-2 px-4 py-3">
                  <img
                    className="w-5 h-5 object-contain"
                    src={e.logo}
                    alt={e.equipos}
                    width={15}
                  />
                  <span className="font-semibold">{e.equipos}</span>
                </td>
                <td className="px-4 py-3">{e.gamesPlayed}</td>
                <td className="px-4 py-3">{e.wins}</td>
                <td className="px-4 py-3">{e.ties}</td>
                <td className="px-4 py-3">{e.losses}</td>
                <td className="px-4 py-3">{e.pointsFor}</td>
                <td className="px-4 py-3">{e.pointsAgainst}</td>
                <td className="px-4 py-3">{e.pointDifferential}</td>
                <td className="px-4 py-3">{e.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
  );
}