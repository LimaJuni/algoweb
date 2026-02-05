'use client'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">AlgoTutor</h3>
            <p className="text-gray-400">
              Master algorithms with your AI lecturer. Built for the future of tech education in Cameroon.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#preview" className="hover:text-primary transition-colors">App Preview</a></li>
              <li><a href="#download" className="hover:text-primary transition-colors">Download</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold">Connect</h4>
            <div className="flex gap-4 text-2xl">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">🐦</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">💻</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">📧</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 AlgoTutor Cameroon. Built for the future of tech education.</p>
        </div>
      </div>
    </footer>
  )
}
