"use client";

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Key } from 'lucide-react';

interface SettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
    const [keys, setKeys] = useState({
        google: '',
        openai: '',
        anthropic: ''
    });
    const [showKeys, setShowKeys] = useState({
        google: false,
        openai: false,
        anthropic: false
    });

    useEffect(() => {
        const storedKeys = localStorage.getItem('ai_api_keys');
        if (storedKeys) {
            setKeys(JSON.parse(storedKeys));
        }
    }, []);

    const handleSave = () => {
        localStorage.setItem('ai_api_keys', JSON.stringify(keys));
        onClose();
    };

    const toggleShow = (provider: keyof typeof showKeys) => {
        setShowKeys(prev => ({ ...prev, [provider]: !prev[provider] }));
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md bg-black/90 border-white/10 backdrop-blur-xl text-white">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <Key className="w-5 h-5 text-primary" />
                        API Settings
                    </DialogTitle>
                </DialogHeader>
                <div className="space-y-6 py-4">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label>Google Gemini API Key</Label>
                            <div className="relative">
                                <Input
                                    type={showKeys.google ? "text" : "password"}
                                    value={keys.google}
                                    onChange={(e) => setKeys(prev => ({ ...prev, google: e.target.value }))}
                                    placeholder="AIza..."
                                    className="bg-white/5 border-white/10 pr-10"
                                />
                                <button
                                    onClick={() => toggleShow('google')}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white"
                                >
                                    {showKeys.google ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label>OpenAI API Key</Label>
                            <div className="relative">
                                <Input
                                    type={showKeys.openai ? "text" : "password"}
                                    value={keys.openai}
                                    onChange={(e) => setKeys(prev => ({ ...prev, openai: e.target.value }))}
                                    placeholder="sk-..."
                                    className="bg-white/5 border-white/10 pr-10"
                                />
                                <button
                                    onClick={() => toggleShow('openai')}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white"
                                >
                                    {showKeys.openai ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label>Anthropic API Key</Label>
                            <div className="relative">
                                <Input
                                    type={showKeys.anthropic ? "text" : "password"}
                                    value={keys.anthropic}
                                    onChange={(e) => setKeys(prev => ({ ...prev, anthropic: e.target.value }))}
                                    placeholder="sk-ant-..."
                                    className="bg-white/5 border-white/10 pr-10"
                                />
                                <button
                                    onClick={() => toggleShow('anthropic')}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white"
                                >
                                    {showKeys.anthropic ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end gap-3">
                        <Button variant="ghost" onClick={onClose}>Cancel</Button>
                        <Button onClick={handleSave} className="bg-primary text-primary-foreground hover:bg-primary/90">
                            Save Keys
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
