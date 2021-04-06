import { Provider } from 'react-redux'

import configureStore from '@/store/configureStore'
import 'Styles/components/canvas.scss';
import 'Styles/app.scss';
import 'Styles/components/frame.scss';
import 'Styles/components/repl.scss';
import 'Styles/components/menu.scss';
import 'Styles/components/repl.scss';
import 'Styles/components/sidebar.scss';
import 'Styles/components/work-item.scss';
import 'Styles/sections/work-list.scss';

export const store = configureStore()

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <audio controls id="startupSound" style={{display: "none"}}>
        <source src="/media/startup.mp3" type="audio/mp3" />
      </audio>
    </>
  )
}
