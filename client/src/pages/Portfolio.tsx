import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  challenge: string;
  solution: string;
  results: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Painel Elétrico Industrial - Fábrica Alfa",
    category: "Painéis Elétricos",
    description: "Montagem e adequação de painel elétrico de alta tensão",
    image: "🔌",
    challenge: "Painel antigo com componentes obsoletos causando falhas frequentes",
    solution: "Substituição completa com componentes modernos e automação",
    results: [
      "Redução de 15% no consumo de energia",
      "Zero falhas em 12 meses",
      "Aumento de 20% na produtividade",
    ],
  },
  {
    id: 2,
    title: "Iluminação Residencial - Casa Beta",
    category: "Iluminação Residencial",
    description: "Projeto completo de iluminação com tecnologia LED",
    image: "💡",
    challenge: "Iluminação antiga e ineficiente consumindo muita energia",
    solution: "Instalação de sistema de iluminação LED inteligente",
    results: [
      "Redução de 60% no consumo de energia",
      "Maior conforto visual",
      "Controle inteligente via aplicativo",
    ],
  },
  {
    id: 3,
    title: "Laudo Técnico NR-10 - Empresa Gamma",
    category: "Laudos Técnicos",
    description: "Inspeção e elaboração de laudo técnico conforme NR-10",
    image: "📋",
    challenge: "Empresa sem documentação técnica atualizada",
    solution: "Inspeção completa e elaboração de laudo detalhado",
    results: [
      "Conformidade total com normas",
      "Documentação completa",
      "Certificação válida por 2 anos",
    ],
  },
  {
    id: 4,
    title: "Manutenção Industrial - Fábrica Delta",
    category: "Manutenção Industrial",
    description: "Programa de manutenção preventiva para sistemas elétricos",
    image: "🔧",
    challenge: "Paradas não planejadas afetando a produção",
    solution: "Implementação de programa de manutenção preventiva",
    results: [
      "Redução de 80% em paradas não planejadas",
      "Aumento de disponibilidade para 99.5%",
      "Economia de R$ 50mil/ano",
    ],
  },
  {
    id: 5,
    title: "Automação Eletrônica - Comércio Epsilon",
    category: "Serviços Eletrônicos",
    description: "Sistema de automação eletrônica para controle de acesso",
    image: "⚡",
    challenge: "Sistema de controle manual e pouco seguro",
    solution: "Implementação de sistema de automação eletrônica integrado",
    results: [
      "Maior segurança e controle",
      "Redução de tempo de operação",
      "Integração com sistemas existentes",
    ],
  },
  {
    id: 6,
    title: "Eficiência Energética - Indústria Zeta",
    category: "Eficiência Energética",
    description: "Análise e otimização de consumo de energia",
    image: "📊",
    challenge: "Consumo de energia elevado e custos crescentes",
    solution: "Análise térmica e implementação de melhorias",
    results: [
      "Redução de 25% no consumo",
      "Economia de R$ 100mil/ano",
      "Impacto ambiental reduzido",
    ],
  },
];

const categories = [
  "Todos",
  "Painéis Elétricos",
  "Manutenção Industrial",
  "Laudos Técnicos",
  "Iluminação Residencial",
  "Serviços Eletrônicos",
  "Eficiência Energética",
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nosso Portfólio</h1>
            <p className="text-lg md:text-xl opacity-95 max-w-2xl">
              Veja os projetos que realizamos com excelência e inovação.
            </p>
          </div>
        </section>

        {/* Category Filters */}
        <section className="py-12 bg-white border-b border-border">
          <div className="container">
            <h2 className="text-lg font-bold text-primary mb-6">
              Filtrar por Categoria:
            </h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground hover:bg-border"
                  }`}
                >
                  {category}
                  {category !== "Todos" && (
                    <span className="ml-2 text-sm">
                      ({projects.filter((p) => p.category === category).length})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border border-border overflow-hidden"
                >
                  {/* Image Placeholder */}
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 h-48 flex items-center justify-center text-6xl">
                    {project.image}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-xs text-accent font-bold mb-2 uppercase">
                      {project.category}
                    </p>
                    <h3 className="text-lg font-bold text-primary mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>

                    {/* Challenge & Solution Summary */}
                    <div className="bg-muted rounded-lg p-3 mb-4 text-sm">
                      <p className="font-medium text-primary mb-1">Desafio:</p>
                      <p className="text-muted-foreground text-xs mb-3">
                        {project.challenge}
                      </p>
                      <p className="font-medium text-primary mb-1">Solução:</p>
                      <p className="text-muted-foreground text-xs">
                        {project.solution}
                      </p>
                    </div>

                    {/* Results */}
                    <div className="mb-4">
                      <p className="font-medium text-primary text-sm mb-2">
                        Resultados:
                      </p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {project.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-accent font-bold">✓</span>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href="/contato">
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        Solicitar Orçamento
                        <ArrowRight className="ml-2" size={16} />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  Nenhum projeto encontrado nesta categoria.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tem um Projeto em Mente?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
              Vamos transformar sua ideia em realidade com qualidade e profissionalismo.
            </p>
            <Link href="/contato">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-primary font-bold"
              >
                Solicitar Orçamento
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
