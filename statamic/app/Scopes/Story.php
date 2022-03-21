<?php

namespace App\Scopes;

use Statamic\Query\Scopes\Scope;

class Story extends Scope {
  /**
   * Apply the scope.
   *
   * @param \Statamic\Query\Builder $query
   * @param array $values
   * @return void
   */
  public function apply($query, $values) {
    $cancer_type = $values->get("filter_cancer_type");

    if ($cancer_type != null) {
      $query->whereIn("cancer_type", "breastcancer");
    }
  }
}
