import NavigationBar from "./src/components/NavigationBar/index";
import store from './src/redux/store'
import { Provider } from 'react-redux'
export default function App() {
  return (
    <Provider store={store}><NavigationBar /></Provider>
  ) ;
}
