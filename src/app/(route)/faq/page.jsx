"use client";
import React from 'react';
import Section from '@/components/Layout/Section';
import H2 from '@/components/UI/Heading/H2';
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

export default function page() {
  const defaultContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <section className="w-full">
      <div className="container mx-auto">
        <Breadcrumbs className='mb-5'>
          <BreadcrumbItem>Главная</BreadcrumbItem>
          <BreadcrumbItem>Вопрос-Ответ</BreadcrumbItem>
        </Breadcrumbs>
        <div className="w-full flex flex-col gap-5">
          <H2 title={'Часто задоваемые вопросы'} />
          <div className="w-full">
            <Accordion showDivider="false" variant='light' className='p-4 border border-green-200 rounded-lg'>
              <AccordionItem key="1" aria-label="Вопрос 1" title="Вопрос 1">
                {defaultContent}
              </AccordionItem>
              <AccordionItem key="2" aria-label="Вопрос 2" title="Вопрос 2">
                {defaultContent}
              </AccordionItem>
              <AccordionItem key="3" aria-label="Вопрос 3" title="Вопрос 3">
                {defaultContent}
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
