import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-3 border-t pt-6 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} TodoApp. All rights reserved.</p>

          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-blue-600">
              Privacy Policy
            </Link>

            <Link to="/terms" className="hover:text-blue-600">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
