import CalculationForm from '../components/CalculationForm';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Journal Position Calculator</h1>
      <CalculationForm />
    </main>
  );
}