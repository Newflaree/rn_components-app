// React
import { useState } from 'react';
// Components
import {
  Card,
  CustomSwitch,
  CustomView
} from '../../components';


export const SwitchScreen = () => {
  const [ state, setState ] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true
  })

  return (
    <CustomView
      style={{
        marginTop: 100,
        paddingHorizontal: 10
      }}
    >
      <Card>
        <CustomSwitch
          isOn={ state.isActive }
          onChange={ ( value ) => setState({ ...state, isActive: value }) }
          text='¿Está activo?'
        />

        <CustomSwitch
          isOn={ state.isHungry }
          onChange={ ( value ) => setState({ ...state, isHungry: value }) }
          text='¿Tiene hambre?'
        />

        <CustomSwitch
          isOn={ state.isHappy }
          onChange={ ( value ) => setState({ ...state, isHappy: value }) }
          text='¿Es feliz?'
        />
      </Card>
    </CustomView>
  );
}
