// --- FILENAME: src/components/Header.js ---
import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ICONS } from '../icons';

export const Header = ({ appName, navigation, ctaButton }) => {
  return (
    <Disclosure as="nav" className="bg-base-100/80 backdrop-blur-lg shadow-sm fixed w-full z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-primary" xmlns="http://www.w3.org/2000/svg"><path d="M2.66666 15.9999C2.66666 8.29992 8.29999 2.66659 16 2.66659C23.7 2.66659 29.3333 8.29992 29.3333 15.9999C29.3333 23.6999 23.7 29.3333 16 29.3333C8.29999 29.3333 2.66666 23.6999 2.66666 15.9999Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16 21.3333V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16 10.6666L16.0067 10.6599" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <span className="ml-2 text-xl font-bold">{appName}</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="px-3 py-2 rounded-md text-sm font-medium text-base-content hover:bg-base-200">
                    {item.name}
                  </a>
                ))}
                <a href={ctaButton.href} className="btn btn-primary btn-sm ml-4">{ctaButton.text}</a>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="btn btn-square btn-ghost">
                  <span className="sr-only">Open main menu</span>
                  {open ? ICONS.X({className: "block h-6 w-6"}) : ICONS.Menu({className: "block h-6 w-6"})}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden bg-base-100 border-t border-base-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button as="a" key={item.name} href={item.href} className="block px-3 py-2 rounded-md text-base font-medium text-base-content hover:bg-base-200">
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-base-200">
              <div className="px-2">
                <a href={ctaButton.href} className="btn btn-primary w-full">{ctaButton.text}</a>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
