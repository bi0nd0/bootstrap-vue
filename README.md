# Bootstrap 5 & Vue 3

## Installation
```sh
yarn add https://github.com/bi0nd0/bootstrap5-vue3.git --name=bootstrap-vue
```

## Usage
```javascript
//main.ts
import App from './App.vue'
import {BootstrapVue} from 'bootstrap-vue'

const app = createApp(App)
app.use(BootstrapVue)
```

## Components
- Modal
- Toast
- Table
- Pagination
- Dropdown
   - DropdownItem
   - DropdownHeader
   - DropdownDivider
### Modal

- Methods
   - async show
   - hide
   - toggle
- Properties
   - same as Modal in bootstrap

### Toast
   - Methods
   - Properties

### Table
   - Methods
   - Properties

### Pagination
   - Methods
   - Properties

### Tooltip (directive)

## Use API
- useToaster
   ```javascript
   const toaster = useToaster()
   toaster.toast({body:`hello world`, title: `Toast!`}, 'top left')
   ```
- useModal
   ```javascript
   const modal = useModal()
   const alertResponse = await modal.alert({title: 'alert', body: 'some text'})
   const confirmResponse = await modal.confirm({title: 'confirm', body: 'some text'})
   ```