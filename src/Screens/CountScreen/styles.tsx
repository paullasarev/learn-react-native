import {
  ViewComponent,
  TextComponent,
  ButtonComponent,
} from '../../components/styled';

export const Counter = ViewComponent({
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const CounterRow = ViewComponent({
  flexDirection: 'row',
  display: 'flex',
  justifyContent: 'center',
});

export const CounterCell = TextComponent({
  fontSize: 38,
  fontWeight: '400',
});

export const CounterButton = ButtonComponent({
  fontSize: 30,
});
