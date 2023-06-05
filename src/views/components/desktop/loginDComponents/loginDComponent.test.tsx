import * as ReactDOM from 'react-dom';
import Login from './LoginDComponents';

describe('Renders desktop login page correctly', () => {

  let container: HTMLDivElement

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<Login />, container);
  })

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  })

  it('Renders correctly initial document of login desktop page', () => {
    const form = container.querySelector("[data-test='login-form']")
    const button = container.querySelector("[data-test='login-button']")
    const link = container.querySelector("[data-test='sign-button']")
    
    expect(link?.getAttribute('href')).toBe('https://github.com/join')

    expect(form).toBeVisible();
    expect(button).toBeVisible();
    expect(link).toBeVisible();
  })

});