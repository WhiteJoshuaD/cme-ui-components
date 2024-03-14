import {
  ActivityForm,
  type ActivityFormValues,
} from '../src/components/activity-form';
import { CmeProvider } from '../src/components/cme-provider';

export default function App() {
  function handleSubmit(values: ActivityFormValues) {
    console.log(values);
  }

  return (
    <div style={{ maxWidth: '95vw', margin: 'auto' }}>
      <CmeProvider publishableKey="pk_abc123">
        <ActivityForm onSubmit={handleSubmit} />
      </CmeProvider>
    </div>
  );
}
