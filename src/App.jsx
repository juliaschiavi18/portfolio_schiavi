import { Route, Switch } from 'wouter';
import { ThemeProvider } from './contexts/ThemeContext';
import { Toaster } from 'sonner';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light" switchable>
      <Toaster />
      <Router />
    </ThemeProvider>
  );
}

export default App;
