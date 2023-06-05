import * as ReactDOM from 'react-dom';
import { DesktopDashboardPage, MobileDashboardPage } from './DashboardPage';

describe('Renders dashboard page desktop version correctly', () => {

  let container: HTMLDivElement

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<DesktopDashboardPage />, container);
  })

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  })

  it('Renders correctly initial document of dashboard page', () => {
    const sections = container.querySelectorAll('section')

    expect(sections[0]).toBeVisible();
    expect(sections[0].className).toBe('user-desktop-card-component');

    expect(sections[1]).toBeVisible();
    expect(sections[1].className).toBe('social-sidebar-component');

    expect(sections[2]).toBeVisible();
    expect(sections[2].className).toBe('search-component');

    expect(sections[3]).toBeVisible();
    expect(sections[3].className).toBe('settings-component');

    expect(sections[4]).toBeVisible();
    expect(sections[4].className).toBe('error-no-repos');
    
    expect(sections).toHaveLength(5)

    const wrapper = container.querySelectorAll('div')
    expect(wrapper).toHaveLength(18)

  })

});

describe('Renders mobile page desktop version correctly', () => {

  let container: HTMLDivElement

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<MobileDashboardPage />, container);
  })

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  })

  it('Renders correctly initial document of mobile page', () => {
    const sections = container.querySelectorAll('section')

    expect(sections[0]).toBeVisible();
    expect(sections[0].className).toBe('search-component');

    expect(sections[1]).toBeVisible();
    expect(sections[1].className).toBe('settings-component');

    expect(sections[2]).toBeVisible();
    expect(sections[2].className).toBe('error-no-repos');

    expect(sections[3]).not.toBeVisible();
    expect(sections[3].className).toBe('user-mobile-card-component');

    expect(sections[4]).not.toBeVisible();
    expect(sections[4].className).toBe('social-sidebar-component');

    expect(sections[5]).toBeVisible();
    expect(sections[5].className).toBe('mobile-navbar-component');
    
    expect(sections).toHaveLength(6)

    const wrapper = container.querySelectorAll('div')
    expect(wrapper).toHaveLength(18)

  })

});