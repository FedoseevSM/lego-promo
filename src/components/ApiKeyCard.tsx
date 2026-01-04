import React, { useState } from 'react';
import { Copy, Check, Code, Key } from 'lucide-react';
interface ApiKeyCardProps {
  widgetName: string;
  apiKey: string;
  cdnUrl: string;
}
export function ApiKeyCard({
  widgetName,
  apiKey,
  cdnUrl
}: ApiKeyCardProps) {
  const [copiedKey, setCopiedKey] = useState(false);
  const [copiedCdn, setCopiedCdn] = useState(false);
  const copyToClipboard = (text: string, setCopied: (v: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return <div className="bg-white rounded-2xl border-2 border-gray-100 shadow-md hover:shadow-lg p-6 transition-all duration-200 hover:border-blue-200">
      <h4 className="font-bold text-lg text-gray-900 mb-4 flex items-center">
        <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-3"></span>
        Подключить {widgetName}
      </h4>

      <div className="space-y-4">
        {/* API Key Section */}
        <div>
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center">
            <Key className="w-3.5 h-3.5 mr-1.5" /> API ключ
          </label>
          <div className="flex items-center">
            <code className="flex-1 bg-gray-50 border-2 border-gray-200 rounded-l-xl px-4 py-3 text-sm font-mono text-gray-800 overflow-hidden text-ellipsis whitespace-nowrap">
              {apiKey}
            </code>
            <button onClick={() => copyToClipboard(apiKey, setCopiedKey)} className="bg-gray-100 hover:bg-gray-200 border-2 border-l-0 border-gray-200 rounded-r-xl px-4 py-3 transition-colors group" aria-label="Скопировать API ключ">
              {copiedKey ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />}
            </button>
          </div>
        </div>

        {/* CDN URL Section */}
        <div>
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center">
            <Code className="w-3.5 h-3.5 mr-1.5" /> CDN скрипт
          </label>
          <div className="relative">
            <pre className="bg-gray-900 text-gray-100 rounded-xl p-4 text-xs font-mono overflow-x-auto border-2 border-gray-800 shadow-inner">
              {`<script src="${cdnUrl}" defer></script>`}
            </pre>
            <button onClick={() => copyToClipboard(`<script src="${cdnUrl}" defer></script>`, setCopiedCdn)} className="absolute top-3 right-3 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors group" aria-label="Скопировать CDN скрипт">
              {copiedCdn ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-gray-400 group-hover:text-gray-200" />}
            </button>
          </div>
        </div>
      </div>
    </div>;
}