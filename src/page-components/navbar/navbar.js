import './navbar.scss';

import ko from 'knockout';
import template from './navbar.html';

// This named export returns the view model and can be used to get the VM for unit tests
export class NavbarViewModel {

  constructor() {

    console.log('Hello from NavbarModel');
  }

  dispose() {
    // This runs when the component is torn down. Put here any logic necessary to clean up,
    // for example cancelling setTimeouts or disposing Knockout subscriptions.
  }
}

// The default export returns the component details object to register with KO
export default { viewModel: NavbarViewModel, template: template };

// TODO: Review if components should just be registered here with KO directly
//ko.components.register({viewModel: HomeViewModel, template: template})