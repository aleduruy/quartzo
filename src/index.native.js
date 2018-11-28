import React from 'react';
import { Scene, Router, Drawer, Actions } from 'react-native-router-flux';
import { ThemeProvider, Text, Col, Touchable, Wrapper } from './components';

import IndexExample from './index.example';
import AlertExample from './components/alert/alert.example';
import BadgeExample from './components/badge/badge.example';
import BoxExample from './components/box/box.example';
import BreadcrumbExample from './components/breadcrumb/breadcrumb.example';
import ButtonExample from './components/button/button.example';
import CardExample from './components/card/card.example';
import CarouselExample from './components/carousel/carousel.example';
import CheckboxExample from './components/checkbox/checkbox.example';
import CollectionExample from './components/collection/collection.example';
import FormGroupExample from './components/form-group/form-group.example';
import GridExample from './components/grid/grid.example';
import HintExample from './components/hint/hint.example';
import ImageExample from './components/image/image.example';
import InputMaskExample from './components/input-mask/input-mask.example';
import LabelExample from './components/label/label.example';
import LikeExample from './components/like/like.example';
import LinkExample from './components/link/link.example';
import LoadingExample from './components/loading/loading.example';
import ModalExample from './components/modal/modal.example';
import NavigationExample from './components/navigation/navigation.example';
import NotificationAlertExample from './components/notification-alert/notification-alert.example';
import ParagraphExample from './components/paragraph/paragraph.example';
import PictureExample from './components/picture/picture.example';
import PriceExample from './components/price/price.example';
import ProductCardExample from './components/product-card/product-card.example';
import RadioExample from './components/radio/radio.example';
import RatingExample from './components/rating/rating.example';
import SelectExample from './components/select/select.example';
import SeparatorExample from './components/separator/separator.example';
import SpacingExample from './components/spacing/spacing.example';
import SvgExample from './components/svg/svg.example';
import TableExample from './components/table/table.example';
import TabsExample from './components/tabs/tabs.example';
import TextExample from './components/text/text.example';
import TextFieldExample from './components/text-field/text-field.example';
import TimerExample from './components/timer/timer.example';
import TitleExample from './components/title/title.example';
import TouchableExample from './components/touchable/touchable.example';
import ViewExample from './components/view/view.example';
import WrapperExample from './components/wrapper/wrapper.example';
import PanResponder from './components/pan-responder/pan-responder.example';

const Item = (key, title) => (
  <Touchable onPress={() => Actions.push(key)} key={key}>
    <Col spacing="sm"><Text size="sm" strong={Actions.currentScene == `_${key}`}>{title}</Text></Col>
  </Touchable>
);

const components = [
  { title: 'PanResponder', key: 'panResponder', component: PanResponder },
  { title: 'Início', key: 'index', component: IndexExample },
  { title: 'Alert', key: 'alert', component: AlertExample },
  { title: 'Badge', key: 'badge', component: BadgeExample },
  { title: 'Box', key: 'box', component: BoxExample },
  { title: 'Breadcrumb', key: 'breadcrumb', component: BreadcrumbExample },
  { title: 'Button', key: 'button', component: ButtonExample },
  { title: 'Card', key: 'card', component: CardExample },
  { title: 'Carousel', key: 'carousel', component: CarouselExample },
  { title: 'Checkbox', key: 'checkbox', component: CheckboxExample },
  { title: 'Collection', key: 'collection', component: CollectionExample },
  { title: 'FormGroup', key: 'form-group', component: FormGroupExample },
  { title: 'Grid', key: 'grid', component: GridExample },
  { title: 'Hint', key: 'hint', component: HintExample },
  { title: 'Image', key: 'image', component: ImageExample },
  { title: 'InputMask', key: 'input-mask', component: InputMaskExample },
  { title: 'Label', key: 'label', component: LabelExample },
  { title: 'Like', key: 'like', component: LikeExample },
  { title: 'Link', key: 'link', component: LinkExample },
  { title: 'Loading', key: 'loading', component: LoadingExample },
  { title: 'Modal', key: 'modal', component: ModalExample },
  { title: 'Navigation', key: 'navigation', component: NavigationExample },
  { title: 'Notification Alert', key: 'notification-alert', component: NotificationAlertExample },
  { title: 'Paragraph', key: 'paragraph', component: ParagraphExample },
  { title: 'Picture', key: 'picture', component: PictureExample },
  { title: 'Price', key: 'price', component: PriceExample },
  { title: 'ProductCard', key: 'product-card', component: ProductCardExample },
  { title: 'Radio', key: 'radio', component: RadioExample },
  { title: 'Rating', key: 'rating', component: RatingExample },
  { title: 'Select', key: 'select', component: SelectExample },
  { title: 'Separator', key: 'separator', component: SeparatorExample },
  { title: 'Spacing', key: 'spacing', component: SpacingExample },
  { title: 'Svg', key: 'svg', component: SvgExample },
  { title: 'Table', key: 'table', component: TableExample },
  { title: 'Tabs', key: 'tabs', component: TabsExample },
  { title: 'Text', key: 'text', component: TextExample },
  { title: 'TextField', key: 'text-field', component: TextFieldExample },
  { title: 'Timer', key: 'timer', component: TimerExample },
  { title: 'Title', key: 'text-title', component: TitleExample },
  { title: 'Touchable', key: 'touchable', component: TouchableExample },
  { title: 'View', key: 'view', component: ViewExample },
  { title: 'Wrapper', key: 'wrapper', component: WrapperExample },
];

const DrawerContent = () => (
  <Wrapper>
    {components.map(component => Item(component.key, component.title))}
  </Wrapper>
);

class App extends React.Component {
  renderDrawer() {
    return (
      <Drawer key="root" contentComponent={DrawerContent}>
        {components.map(component => (
          <Scene drawer={true} key={component.key} component={component.component} title={component.title} />
        ))}
      </Drawer>
    );
  }

  render() {
    return (
      <ThemeProvider theme={{ brand: 'shop' }}>
        <Router>{this.renderDrawer()}</Router>
      </ThemeProvider>
    );
  }
}

export default App;
