import React, { Component } from 'react';
import Module from '../components/module';

import '../styles/modules.scss';

const activities = [
  {
    ptSlug: "homework",
    ptName: "Homework Plot Twister",
    ptTagline: "Reflect on the work you just finished.",
    pdfFiles: [
      "generic",
      "tech",
      "essay"
    ]
  },
  {
    ptSlug: "twobirds",
    ptName: "Two Birds One Stone",
    ptTagline: "Reflect on the work you just finished.",
    pdfFiles: [
      "generic"
    ]
  },
  {
    ptSlug: "lemonade",
    ptName: "Lemonade Mixer",
    ptTagline: "Find where all your habits fall on a spectrum.",
    pdfFiles: [
      "generic"
    ]
  },
  {
    ptSlug: "cookie",
    ptName: "Cookie Trail",
    ptTagline: "Find where all your habits fall on a spectrum.",
    pdfFiles: [
      "generic"
    ]
  },
  {
    ptSlug: "rolemodel",
    ptName: "Role Model Interview",
    ptTagline: "Find where all your habits fall on a spectrum.",
    pdfFiles: [
      "generic"
    ]
  },
  {
    ptSlug: "improv",
    ptName: "Plot Twister Improv Games",
    ptTagline: "Find where all your habits fall on a spectrum.",
    pdfFiles: [
      "generic"
    ]
  },
]

export default function Activities()  {
  return (
    <div className="modules">
      {activities.map(activity => (
        // defining route
          <Module
            key={activity.ptSlug}
            ptSlug={activity.ptSlug}
            ptName={activity.ptName}
            ptTagline={activity.ptTagline}
          />
      ))}
    </div>
  );
}
