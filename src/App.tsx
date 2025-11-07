import { Encabezado } from './componentes/Encabezado';
import { SeccionHero } from './componentes/SeccionHero';
import { SeccionCaracteristicas } from './componentes/SeccionCaracteristicas';
import { SeccionPrecios } from './componentes/SeccionPrecios';
import { SeccionContacto } from './componentes/SeccionContacto';
import { PiePagina } from './componentes/PiePagina';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Encabezado />
      <main>
        <SeccionHero />
        <SeccionCaracteristicas />
        <SeccionPrecios />
        <SeccionContacto />
      </main>
      <PiePagina />
    </div>
  );
}

export default App;
