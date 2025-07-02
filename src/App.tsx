import { Dashboard } from "@pages/Dashboard"
import { AppProviders } from "@providers/AppProviders"

function App() {
  return (
    <AppProviders>
      <Dashboard />
    </AppProviders>
  )
}

export default App
