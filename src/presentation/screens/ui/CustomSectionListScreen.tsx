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
// Styles
import { colors } from '../../../config';


export const CustomSectionListScreen = () => {
  const { height } = useWindowDimensions();
  const { top } = useSafeAreaInsets();

  return (
    <CustomView margin>
      <Title text='Lista de personajes' safe />

      <Card>
        <SectionList
          sections={ houses }
          keyExtractor={ (item) => item }
          renderItem={ ({ item }) => <Text style={{ marginVertical: 2 }}>{ item }</Text> }
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
