// Copyright (c) 2024 Manya All rights reserved
//
// Created by: Manya
// Created on: Mar 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates pay and taxes of salary.
 */
function calculatePayAndTaxesOfSalary () {
  const TAX_RATE = 0.18
  // input
  const hoursOfSalary = parseInt(document.getElementById('hours').value)
  const rateOfSalary = parseInt(document.getElementById('rate').value)

  // process
  const payOfSalary = hoursOfSalary * rateOfSalary * (1.00 - TAX_RATE)
  const taxesOfSalary = (hoursOfSalary * rateOfSalary) * TAX_RATE

  // output
  document.getElementById('pay').innerHTML = 'The pay will be: $ ' + payOfSalary.toFixed(2)
  document.getElementById('taxes').innerHTML = 'The taxes will be: $ ' + taxesOfSalary.toFixed(2)
}

