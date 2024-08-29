// React
import { useContext } from 'react';
// React Native
import {
  Text,
  SectionList,
  useWindowDimensions
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// Components
import {
  Card,
  CustomView,
  Separator,
  SubTitle,
  Title
} from '../../components';
// Database
import { houses } from '../../../database';
// Context
import { ThemeContext } from '../../context';


export const CustomSectionListScreen = () => {
  const { colors } = useContext( ThemeContext );
  const { height } = useWindowDimensions();
  const { top } = useSafeAreaInsets();

  return (
    <CustomView margin>
      <Title text='Lista de personajes' safe />

      <Card>
        <SectionList
          sections={ houses }
          keyExtractor={ (item) => item }
          renderItem={ ({ item }) => <Text style={{ marginVertical: 2, color: colors.text }}>{ item }</Text> }
          renderSectionHeader={ 
            ({ section }) => <SubTitle
              text={ section.title }
              backgroundColor={ colors.cardBackground }
            /> 
          }
          stickySectionHeadersEnabled
          SectionSeparatorComponent={ Separator }
          ListHeaderComponent={ () => <Title text='Personajes' /> }
          ListFooterComponent={ () => <Title text={ `Secciones: ${ houses.length }` } /> }
          showsVerticalScrollIndicator={ false }
          style={{
            height: height - top - 120
          }}
        />
      </Card>
    </CustomView>
  );
}
